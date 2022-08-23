Rails.application.routes.draw do
  resources :responses
  resources :favorites
  resources :critiques
  resources :stories
  resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  # route to test your configuration
  post "/login", to: "sessions#create"
  get "/me", to: "users#me"
  delete "/logout", to: "sessions#destroy"
end
