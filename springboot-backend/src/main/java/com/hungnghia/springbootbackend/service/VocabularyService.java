package com.hungnghia.springbootbackend.service;

import com.hungnghia.springbootbackend.dto.VocabularyDto;
import com.hungnghia.springbootbackend.dto.VocabularyUpdateDto;
import com.hungnghia.springbootbackend.entities.VocabularyEntity;
import com.hungnghia.springbootbackend.entities.VocabularyTopicEntity;
import com.hungnghia.springbootbackend.exception.ResourceNotFoundException;
import com.hungnghia.springbootbackend.repository.VocabularyRepository;
import com.hungnghia.springbootbackend.repository.VocabularyTopicRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;
import java.util.stream.Collectors;

@Service
public class VocabularyService {

    private final VocabularyRepository vocabularyRepository;
    private final VocabularyTopicRepository vocabularyTopicRepository;
    private final AmazonClient amazonClient;

    @Autowired
    public VocabularyService(VocabularyRepository vocabularyRepository, VocabularyTopicRepository vocabularyTopicRepository, AmazonClient amazonClient) {
        this.vocabularyRepository = vocabularyRepository;
        this.vocabularyTopicRepository = vocabularyTopicRepository;
        this.amazonClient = amazonClient;
    }

    @Transactional
    public List<VocabularyEntity> findVocabularyByTopic(Long id) {
        return vocabularyRepository.findVocabularyByTopic(id);
    }

    @Transactional
    public VocabularyEntity addVocabulary(VocabularyDto vocabularyDto, MultipartFile file_audio, MultipartFile file_image) {
        VocabularyEntity vocabularyEntity = new VocabularyEntity();
        VocabularyTopicEntity vocabularyTopicEntity = vocabularyTopicRepository.findById(vocabularyDto.getIdVocabularyTopic())
                .orElse(null);
        vocabularyEntity.setContent(vocabularyDto.getContent());
        vocabularyEntity.setExample_vocabulary(vocabularyDto.getExample_vocabulary());
        vocabularyEntity.setExplain_vocabulary(vocabularyDto.getExplain_vocabulary());
        vocabularyEntity.setMean(vocabularyDto.getMean());
        vocabularyEntity.setMean_example_vocabulary(vocabularyDto.getMean_example_vocabulary());
        String fileAudioUrl = amazonClient.uploadFile(file_audio);
        String fileImageUrl = amazonClient.uploadFile(file_image);
        vocabularyEntity.setImage(fileImageUrl);
        vocabularyEntity.setFile_audio(fileAudioUrl);
        vocabularyEntity.setVocabularyTopicEntity(vocabularyTopicEntity);
        return vocabularyRepository.save(vocabularyEntity);
    }

    @Transactional
    public VocabularyEntity deleteVocabulary(Long id) {
        VocabularyEntity vocabularyEntity = getVoca(id);
        vocabularyRepository.delete(vocabularyEntity);
        return vocabularyEntity;
    }

    public VocabularyEntity getVoca(Long id) {
        return vocabularyRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Không tồn tại từ vựng với id : " + id));
    }

    /*Edit vocabulary*/
    @Transactional
    public VocabularyEntity updateVocabulary(Long id, VocabularyUpdateDto vocabularyUpdateDto, MultipartFile file_audio, MultipartFile file_image) {
        VocabularyEntity vocabularyEntity = getVoca(id);
        vocabularyEntity.setContent(vocabularyUpdateDto.getContent());
        vocabularyEntity.setTranscribe(vocabularyUpdateDto.getTranscribe());
        vocabularyEntity.setMean_example_vocabulary(vocabularyUpdateDto.getMean_example_vocabulary());
        vocabularyEntity.setMean(vocabularyUpdateDto.getMean());
        vocabularyEntity.setExplain_vocabulary(vocabularyUpdateDto.getExplain_vocabulary());
        vocabularyEntity.setExample_vocabulary(vocabularyUpdateDto.getExample_vocabulary());
        if (!(file_audio == null)) {
            String fileAudioUrl = amazonClient.uploadFile(file_audio);
            vocabularyEntity.setFile_audio(fileAudioUrl);
        }
        if (!(file_image == null)) {
            String fileImageUrl = amazonClient.uploadFile(file_image);
            vocabularyEntity.setImage(fileImageUrl);
        }
        vocabularyRepository.save(vocabularyEntity);
        return vocabularyEntity;
    }

    @PersistenceContext
    private EntityManager entityManager;

    public List<VocabularyEntity> getRandomVoca(int countRandom) {

        List<Long> listIdVoca = vocabularyRepository.findListIdVoca();
        List<VocabularyEntity> vocabularyEntityList = new ArrayList<VocabularyEntity>();
        if (listIdVoca.size() < countRandom) {
            return vocabularyRepository.findAll();
        } else {
            List<Long> randList = new Random().longs(countRandom, 0, listIdVoca.size() - 1)
                    .boxed().collect(Collectors.toList());
            for (long indexRandom : randList) {
                int indexConvert = (int) indexRandom;
                Long idVoca = listIdVoca.get(indexConvert);
                vocabularyEntityList.add(vocabularyRepository.findById(idVoca).get());
            }
        }
        return vocabularyEntityList;
    }
}
