from app.core.config import Settings


def make_settings(**overrides) -> Settings:
    values = dict(
        app_env="development",
        database_url="postgresql://test:test@localhost:5432/test",
        allowed_origins=["https://app.example.com"],
        allow_insecure_cookies=False,
        session_ttl_seconds=2592000,
    )
    values.update(overrides)
    return Settings(_env_file=None, **values)
