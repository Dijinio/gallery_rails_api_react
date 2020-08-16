class Album < ApplicationRecord
  has_many :photos
  validates :name, presence: true, uniqueness: { case_sensitive: false }
  default_scope { order(name: :asc) }
end
