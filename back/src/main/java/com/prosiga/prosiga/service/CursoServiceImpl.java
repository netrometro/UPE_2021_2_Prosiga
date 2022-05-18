package com.prosiga.prosiga.service;

import com.prosiga.prosiga.domain.Curso;
import com.prosiga.prosiga.repository.CursoRepo;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional
@Slf4j
public class CursoServiceImpl implements CursoService {

    private final CursoRepo cursoRepo;

    @Override
    public Curso save(Curso curso) {
        log.info("Salvando curso: {}", curso);
        return cursoRepo.save(curso);
    }

    @Override
    public List<Curso> findAll() {
        log.info("Buscando todos os cursos");
        return cursoRepo.findAll();
    }

    @Override
    public Curso findById(Long id) {
        log.info("Buscando curso por id: {}", id);
        return cursoRepo.findById(id).orElse(null);
    }

    @Override
    public void delete(Long id) {
        log.info("Deletando curso por id: {}", id);
        cursoRepo.deleteById(id);
    }
}