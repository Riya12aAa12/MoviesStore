import React from 'react';
import ChatBot from 'react-simple-chatbot';

const steps = [
  {
    id: '0',
    message: 'Welcome to React Chatbot!',
    trigger: '1',
  },
  {
    id: '1',
    message: 'What can I assist you with today?',
    trigger: 'options',
  },
  {
    id: 'options',
    options: [
      { value: 'movies', label: 'Movies', trigger: 'movies' },
      { value: 'tv_shows', label: 'TV Shows', trigger: 'tv_shows' },
      { value: 'general_information', label: 'General Information', trigger: 'general_information' },
    ],
  },
  {
    id: 'movies',
    message: 'You selected movies. What information do you need?',
    trigger: 'movies_info',
  },
  {
    id: 'movies_info',
    options: [
      { value: 'latest_movies', label: 'Latest Movies', trigger: 'latest_movies' },
      { value: 'cast', label: 'Cast Information', trigger: 'movies_cast_info' },
      { value: 'back', label: 'Go back', trigger: 'options' },
    ],
  },
  {
    id: 'tv_shows',
    message: 'You selected TV Shows. What information do you need?',
    trigger: 'tv_shows_info',
  },
  {
    id: 'tv_shows_info',
    options: [
      { value: 'latest_shows', label: 'Latest Shows', trigger: 'latest_shows' },
      { value: 'cast', label: 'Cast Information', trigger: 'tv_shows_cast_info' },
      { value: 'back', label: 'Go back', trigger: 'options' },
    ],
  },
  {
    id: 'general_information',
    message: 'You selected General Information. What topic are you interested in?',
    trigger: 'general_info_options',
  },
  {
    id: 'general_info_options',
    options: [
      { value: 'topic1', label: 'Topic 1', trigger: 'topic1_info' },
      { value: 'topic2', label: 'Topic 2', trigger: 'topic2_info' },
      { value: 'back', label: 'Go back', trigger: 'options' },
    ],
  },
  {
    id: 'topic1_info',
    message: 'Here is information about Topic 1...',
    trigger: 'general_info_options',
  },
  {
    id: 'topic2_info',
    message: 'Here is information about Topic 2...',
    trigger: 'general_info_options',
  },
  {
    id: 'latest_movies',
    message: 'Here are the latest movies...',
    trigger: 'movies_info',
  },
  {
    id: 'movies_cast_info',
    message: 'Here is the cast information for movies...',
    trigger: 'movies_info',
  },
  {
    id: 'latest_shows',
    message: 'Here are the latest TV shows...',
    trigger: 'tv_shows_info',
  },
  {
    id: 'tv_shows_cast_info',
    message: 'Here is the cast information for TV shows...',
    trigger: 'tv_shows_info',
  },
];

export const ChatbotComponent = () => {
  return (
    <div>
      <ChatBot steps={steps} floating={true} />
    </div>
  );
};
