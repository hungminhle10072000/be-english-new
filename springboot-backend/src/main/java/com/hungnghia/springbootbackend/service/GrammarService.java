package com.hungnghia.springbootbackend.service;

import com.hungnghia.springbootbackend.entities.GrammarEntity;
import com.hungnghia.springbootbackend.exception.ResourceNotFoundException;
import com.hungnghia.springbootbackend.repository.GrammarRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class GrammarService {

    private final GrammarRepository grammarRepository;

    @Autowired
    public GrammarService(GrammarRepository grammarRepository) {
        this.grammarRepository = grammarRepository;
    }

    public List<GrammarEntity> getAllGrammar(){
        return grammarRepository.findAll();
    }

    public GrammarEntity deleteGrammar(Long id){
        GrammarEntity grammarEntity = getGrammarWithId(id);
        grammarRepository.delete(grammarEntity);
        return grammarEntity;
    }

    /*add grammar name*/
    public GrammarEntity addGrammarName(String name){
        GrammarEntity grammarEntity = new GrammarEntity();
        grammarEntity.setName(name);
        return grammarRepository.save(grammarEntity);
    }

    public GrammarEntity getGrammarWithId(Long id){
        return grammarRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Không tồn tại bài học ngữ pháp với id : " + id));
    }

    /*update name grammar*/
    public GrammarEntity updateGrammarName(Long id, String name){
        GrammarEntity grammarEntity = getGrammarWithId(id);
        grammarEntity.setName(name);
        return grammarRepository.save(grammarEntity);
    }

}
