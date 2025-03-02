class RemoveContentFromArticles < ActiveRecord::Migration[6.0]
  # migrate時
  def up
    remove_column :articles, :content
  end

  # rollback時
  def down
    add_column :articles, :content, :text
  end
end
