package com.graphqljava.poc.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;
import java.util.List;

@Document(collection = "movies")
public class Movie {
    @Id
    private String id;
    private String plot;
    private List<String> genres;
    private int runtime;
    private List<String> cast;
    private int numMflixComments;
    private String poster;
    private String title;
    private String fullplot;
    private List<String> languages;
    private Date released;
    private List<String> directors;
    private List<String> writers;
    private Awards awards;
    private String lastupdated;
    private int year;
    private Imdb imdb;
    private List<String> countries;
    private String type;
    private Tomatoes tomatoes;
    private List<Float> plotEmbedding;

    // Getters and setters

    public static class Awards {
        private int wins;
        private int nominations;
        private String text;

        // Getters and setters
    }

    public static class Imdb {
        private double rating;
        private int votes;
        private int id;

        // Getters and setters
    }

    public static class Tomatoes {
        private Viewer viewer;
        private String production;
        private Date lastUpdated;

        // Getters and setters

        public static class Viewer {
            private double rating;
            private int numReviews;

            // Getters and setters
        }
    }
}