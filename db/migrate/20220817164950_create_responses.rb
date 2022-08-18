class CreateResponses < ActiveRecord::Migration[6.1]
  def change
    create_table :responses do |t|
      t.string :response
      t.references :resp_critique, foreign_key: { to_table: 'critiques'}
      t.references :resp_user, foreign_key: { to_table: 'users' }

      t.timestamps
    end
  end
end
