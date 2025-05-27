package com.graphqljava.poc.controller;

import com.graphqljava.poc.model.Movie;
import com.graphqljava.poc.repository.MovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
public class MovieController {

    @Autowired
    private MovieRepository movieRepository;

    @QueryMapping
    public List<Movie> movies() {
        return movieRepository.findAll();
    }

    @QueryMapping
    public Movie movieById(@Argument String id) {
        return movieRepository.findById(id).orElse(null);
    }

    @QueryMapping
    public  Map<String, Object> moviesByYear(@Argument int year) {
        List<Movie> movies = movieRepository.findByYear(year);
        int count = movies.size();
        Map<String, Object> result = new HashMap<>();
        result.put("movies", movies);
        result.put("count", count);
        return result;
    }

    @QueryMapping
    public List<Movie> moviesByYearAndGenre(@Argument int year, @Argument String genres) {
        return movieRepository.findByYearAndGenres(year, genres);
    }

    @QueryMapping
    public Map<String, Object>  moviesByGenres(@Argument List<String> genres) {
        List<Movie> movies = movieRepository.findByGenres(genres);
        int count = movies.size();
        Map<String, Object> result = new HashMap<>();
        result.put("movies", movies);
        result.put("count", count);
        return result;
    }

}