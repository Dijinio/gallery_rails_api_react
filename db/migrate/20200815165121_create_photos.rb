class CreatePhotos < ActiveRecord::Migration[6.0]
  def change
    create_table :photos do |t|
      t.string :public_id
      t.references :album, null: false, foreign_key: true

      t.timestamps
    end
  end
end
