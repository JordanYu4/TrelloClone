Rails.application.routes.draw do

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:show, :create]
    resource :session, only: [:create, :destroy]
    resources :boards, only: [:show, :index, :create, :update, :destroy] do
      resources :lists, only: [:show, :index, :create, :update]
    end
    resources :lists, only: [:destroy] do 
      resources :cards, only: [:show, :index, :create]
    end
    resources :cards, only: [:update, :destroy] do 
      resources :labels, only: [:index, :create]
    end
    resources :labels, only: [:update, :destroy]
  end

  root "static_pages#root"

end
