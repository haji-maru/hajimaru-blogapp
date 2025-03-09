module TabsHelper
  def add_active_class(path)
    path = path.split('?').first # ? 以降を取り除く
    'active' if current_page?(path)
  end
end