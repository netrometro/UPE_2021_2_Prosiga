package com.prosiga.prosiga.service;

import com.prosiga.prosiga.domain.Curso;

import java.util.List;

public interface CursoService {

    Curso save(Curso curso);

    List<Curso> findAll();

    Curso findById(Long id);

    void delete(Long id);

}