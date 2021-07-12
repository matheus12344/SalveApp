defmodule HelloAppApiWeb.Schema.Types.User do
  use Absinthe.Schema.Notation

  @doc " User Logic "
  object :user do
    field :id, non_null(:uuid4)
    field :name, non_null(:string)
    field :status, non_null(:boolean)
    field :status_text, non_null(:string)
    field :email, non_null(:string)
    field :password, non_null(:string)
  end

  @desc "Create object user"
  input_object :create_user do
    field :name, :string
    field :status, :boolean
    field :status_text, :string
    field :email, :string
    field :password, :string
  end

  @desc "Update object user"
  input_object :update_user do
    field :name, :string
    field :status, :boolean
    field :status_text, :string
    field :email, :string
    field :password, :string
  end
end
