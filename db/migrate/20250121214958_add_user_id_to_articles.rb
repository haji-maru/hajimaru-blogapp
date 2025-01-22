class AddUserIdToArticles < ActiveRecord::Migration[6.0]
  def change
    add_reference :articles, :user
    # add_column :articles, :user_id, :integer
  end
end
