defmodule HelloAppApiWeb.Resolver.User.Index do
  alias HelloAppApi.Users.User
  def get_all_user(), do: User.get_all()
  def create_user(params), do: User.create_user(params)
  def get_user_by_id(id), do: User.get_user_by_id(id)

  def update_user(params) do
    id = Map.get(params, :user)
    date = Map.get(params, :date_update)
    User.update_user(id, date)
  end
end
