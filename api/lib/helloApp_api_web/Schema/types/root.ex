defmodule HelloAppApiWeb.Schema.Types.Root do
  use Absinthe.Schema.Notation

  alias HelloAppApiWeb.Resolver.User.Index, as: UserResolve

  import_types HelloAppApiWeb.Schema.Types.User
  import_types HelloAppApiWeb.Schema.Types.UUID4

  # Busca dados no banco de dados
  object(:root_query) do
    field :get_all_user, list_of(:user) do
      resolve(fn _, _ ->
        UserResolve.get_all_user()
      end)
    end

    field :get_user_by_id, :user do
      arg :id, non_null(:uuid4)

      resolve(fn id, _ ->
        UserResolve.get_user_by_id(id)
      end)
    end
  end

  # Mutation mudar dados no banco de dados
  object(:root_mutation) do
    field :create_user, :user do
      arg :input, non_null(:create_user)

      resolve(fn %{input: content}, _ ->
        UserResolve.create_user(content)
      end)
    end

    field :update_user, :user do
      arg :user, non_null(:uuid4)
      arg :date_update, non_null(:update_user)

      resolve(fn date, _ ->
        UserResolve.update_user(date)
      end)
    end
  end
end
