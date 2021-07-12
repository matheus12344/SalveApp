defmodule HelloAppApi.Repo.Migrations.MessagensTable do
  use Ecto.Migration

  def change do
    create table :message do
      add :message, :string
      add :send_message_id, references(:user)
      add :receive_message_id, references(:user)

      timestamps()
    end
  end
end
