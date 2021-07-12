# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.

# General application configuration
use Mix.Config

config :helloApp_api,
  ecto_repos: [HelloAppApi.Repo],
  generators: [binary_id: true]

config :helloApp_api, HelloAppApi.Repo,
  migration_primary_key: [type: :binary_id],
  migration_foreign_key: [type: :binary_id]

# Configures the endpoint
config :helloApp_api, HelloAppApiWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "QhXm+pG0e5lP3+qPp2U3fm2PdrbC9cA6rN6k8RdPxtw3r5EKF0BRUKXCovtvKKYj",
  render_errors: [view: HelloAppApiWeb.ErrorView, accepts: ~w(json), layout: false],
  pubsub_server: HelloAppApi.PubSub,
  live_view: [signing_salt: "qVwVKxVC"]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Use Jason for JSON parsing in Phoenix
config :phoenix, :json_library, Jason

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env()}.exs"
