defmodule HelloAppApi.Repo do
  use Ecto.Repo,
    otp_app: :helloApp_api,
    adapter: Ecto.Adapters.Postgres
end
