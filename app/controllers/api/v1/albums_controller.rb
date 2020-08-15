class Api::V1::AlbumsController < ApplicationController
  def index
    byebug
    render json: { album: "Test Album from api" }
  end

  def show
  end

  def create
  end

  def update
  end
end
