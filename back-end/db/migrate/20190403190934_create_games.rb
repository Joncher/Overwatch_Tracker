class CreateGames < ActiveRecord::Migration[5.2]
  def change
    create_table :games do |t|
      t.string :result
      t.integer :new_ranking
      t.string :hero_one
      t.string :hero_two
      t.integer :party_size
      t.string :map
      t.text :details
      t.integer :user_id
      t.timestamps
    end
  end
end
