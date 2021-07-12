defmodule HelloAppApi.Users.User do
  alias HelloAppApi.{Repo, Users}
  alias Ecto.UUID

  # Create User
  def create_user(params) do
    params
    |> Users.changeset()
    |> Repo.insert()
  end

  # Get user com id
  def get_user_by_id(id) do
    id
    |> UUID.cast()
    |> handle_error()
  end

  # Inicio do tratamento de possiveis erros
  def handle_error(:error) do
    {:error, "id invalid!"}
  end

  def handle_error({:ok, id}) do
    case Repo.get(Users, id) do
      nil -> {:error, "Not found user!"}
      user -> user
    end
  end

  # Fim do tratamento de erros

  # Get All User
  def get_all() do
    Users
    |> Repo.all()
  end

  # Delete user
  def delete_user(id) do
    get_user_by_id(id)
    |> Repo.delete()
  end

  # Update User
  def update_user(id, params) do
    get_user_by_id(id)
    |> Ecto.Changeset.change(params)
    |> Repo.update()
  end
end
