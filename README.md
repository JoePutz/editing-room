# Editing Room

## Table of Contents
* [General Info](#general-information)
* [Technologies Used](#technologies-used)
* [Features](#features)
* [Site](#site)
* [Setup](#setup)

## General Information
A page designed for amateur writers to post their works and offer critiques to each other. 

## Technologies Used
- active-record: 6.1 
- javascript: ES6
- rake: 13.6
- react: 18.2
- ruby: 2.7.4
- faker: 2.19
- sqlite: 1.4

## Features
A User will be able to: 
- Create an account
- Modify their account bio
- Type up and post stories
- Edit their posted stories
- Search the various stories sorted by Genre
- Read through those stories
- Critique and Favorite individual stories
- Comment upon other critiques that they observe

## Setup
- First fork the app from github and cd into the app
- run: 
- bundle install
- rails db:create
- npm intall --prefix client
- rails s
- npm start --prefix client