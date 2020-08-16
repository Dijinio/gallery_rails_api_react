class Api::V1::AlbumsController < ApplicationController
  def index
    albums = Album.all
    render json: { albums: albums }
  end

  def show
  end

  def create
    album = Album.new(name: params[:name])
    if album.save
      render json: { album: album }
    else
      render json: { errors: album.errors }
    end
  end

  def update
    album = Album.find(params[:album_id])
    images = params[:images]
    images.each do |image|
      photo_info = Cloudinary::Uploader.upload(image, colors: true)
      Photo.create(album_id: album.id, public_id: photo_info["public_id"])
    end

    render status: 200
  end

end
