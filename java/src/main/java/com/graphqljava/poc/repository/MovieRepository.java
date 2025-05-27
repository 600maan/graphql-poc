package com.graphqljava.poc.repository;

import com.graphqljava.poc.model.Movie;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface MovieRepository extends MongoRepository<Movie, String> {
    List<Movie> findByYear(int year);
    List<Movie> findByYearAndGenres(int year, String genres);
    List<Movie> findByGenres(List<String> genres);
}