package com.prosiga.prosiga.api;

import com.prosiga.prosiga.domain.Curso;
import com.prosiga.prosiga.service.CursoService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
@EnableWebSecurity
public class CursoResource {
    private final CursoService cursoService;

    @PostMapping("/curso")
    public ResponseEntity<Curso> save(@RequestBody Curso curso) {
        return ResponseEntity.ok(cursoService.save(curso));
    }

    @GetMapping("/cursos")
    public ResponseEntity<List<Curso>> getCursos() {
        return ResponseEntity.ok(cursoService.findAll());
    }

    @DeleteMapping("/curso/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        cursoService.delete(id);
        return ResponseEntity.noContent().build();
    }
}

