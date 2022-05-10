package com.hungnghia.springbootbackend.service;

import com.hungnghia.springbootbackend.entities.VocabularyTopicEntity;
import com.hungnghia.springbootbackend.exception.ResourceNotFoundException;
import com.hungnghia.springbootbackend.repository.VocabularyTopicRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

@Service
public class VocabularyTopicService {

    private final VocabularyTopicRepository vocabularyTopicRepository;
    private final AmazonClient amazonClient;

    @Autowired
    public VocabularyTopicService(VocabularyTopicRepository vocabularyTopicRepository, AmazonClient amazonClient) {
        this.vocabularyTopicRepository = vocabularyTopicRepository;
        this.amazonClient = amazonClient;
    }

    @Transactional
    public VocabularyTopicEntity addVocabularyToipc(String name_topic, MultipartFile image) {
        VocabularyTopicEntity vocabularyTopicEntity = new VocabularyTopicEntity();
        vocabularyTopicEntity.setName(name_topic);
        String imageUrl = amazonClient.uploadFile(image);
        vocabularyTopicEntity.setImage(imageUrl);
        return vocabularyTopicRepository.save(vocabularyTopicEntity);
    }

    @Transactional
    public VocabularyTopicEntity deleteVocabularyTopics(Long id) {
        VocabularyTopicEntity vocabularyTopicEntity = getVocaTopic(id);
        vocabularyTopicRepository.delete(vocabularyTopicEntity);
        return vocabularyTopicEntity;
    }

    public VocabularyTopicEntity getVocaTopic(Long id) {
        return vocabularyTopicRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Không tồn tại chủ đề từ vựng với id : " + id));
    }

    public List<VocabularyTopicEntity> getVocabularyTopics() {
        return vocabularyTopicRepository.findAll();
    }

    /*Edit voca topic*/
    @Transactional
    public VocabularyTopicEntity updateVocaTopic(Long id, String name_topic, MultipartFile image) {
        VocabularyTopicEntity vocabularyTopicEntity = vocabularyTopicRepository.getById(id);
        vocabularyTopicEntity.setName(name_topic);
        if (!(image == null)) {
            String imageUrl = amazonClient.uploadFile(image);
            vocabularyTopicEntity.setImage(imageUrl);
        }
        return vocabularyTopicRepository.save(vocabularyTopicEntity);
    }

    @PersistenceContext
    private EntityManager entityManager;

    public List<VocabularyTopicEntity> getNewTopicVoca() {
        return entityManager.createQuery("select p from VocabularyTopicEntity p order by p.id desc",
                VocabularyTopicEntity.class).setMaxResults(10).getResultList();
    }

}
