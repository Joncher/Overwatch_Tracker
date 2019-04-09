Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1 do
      resources :users, only: [:create, :update]
      get "/games/:id", to: 'users#show'
      post '/login', to: 'auth#create'
      get '/profile', to: 'users#profile'
      resources :games, only: [:create]
    end
  end
end
