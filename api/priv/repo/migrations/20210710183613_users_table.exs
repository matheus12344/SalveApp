defmodule HelloAppApi.Repo.Migrations.UsersTable do
  use Ecto.Migration

  def change do
    create table(:user) do
      add :name, :string
      add :status, :boolean, defauld: false
      add :status_text, :string
      add :email, :string
      add :password, :string

      timestamps()
    end
    create unique_index(:user, [:email])
  end
end
