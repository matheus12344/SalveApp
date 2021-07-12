defmodule HelloAppApi.Users do
  use Ecto.Schema
  import Ecto.Changeset

  @primary_key {:id, :binary_id, autogenerate: true}

  @field [:name, :status, :status_text, :password, :email]
  @field_require [:name, :status_text, :password, :email]

  schema "user" do
    field :name, :string
    field :status, :boolean
    field :status_text, :string
    field :email, :string
    field :password, :string

    timestamps()
  end

  def changeset(params) do
    %__MODULE__{}
    |> cast(params, @field)
    |> validate_required(@field_require)
    |> validate_format(:email, ~r/@/)
  end
end
