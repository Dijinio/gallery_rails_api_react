class Api::V1::AlbumsController < ApplicationController
  def index
    albums = Album.all
    result = []

    albums.each do |album|
      result.push({ name: album.name, photos: album.photos })
    end

    render json: { albums: result }
  end

  def show
  end

  def create
    album_name = params[:album_name].downcase.chomp.capitalize
    album = Album.find_by_name(album_name)
    images = params[:images]

    if (!album)
      album = Album.create(name: album_name)
    end

    images.each do |image|
      photo_info = Cloudinary::Uploader.upload(image, colors: true)
      # photo_info["predominant"]["google"]
      Photo.create(album_id: album.id, public_id: photo_info["public_id"])
    end

    render status: 200
  end

  def update

  end

end
