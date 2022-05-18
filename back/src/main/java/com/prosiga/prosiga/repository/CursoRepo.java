package com.prosiga.prosiga.repository;

import com.prosiga.prosiga.domain.Curso;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CursoRepo extends JpaRepository<Curso, Long> {
}