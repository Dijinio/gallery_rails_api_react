class Album < ApplicationRecord
  has_many :photos
  validates :name, presence: true, uniqueness: true
end
