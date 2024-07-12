import asyncio
import logging

from aiogram import Bot, Dispatcher, types, F
from aiogram.filters.command import Command

from config import TG_BOT_TOKEN

# Включаем логирование, чтобы не пропустить важные сообщения
logging.basicConfig(level=logging.INFO)
# Объект бота
bot = Bot(token=TG_BOT_TOKEN)
# Диспетчер
dp = Dispatcher()


# Хэндлер на команду /start
@dp.message(Command("start"))
async def cmd_start(message: types.Message):
    await message.answer("Привет! Я бот, который может расчитать совместимость, просто запусти мини приложение!")


# Хэндлер на команду /start
@dp.message(Command("help"))
async def cmd_help(message: types.Message):
    await message.answer("Пока что во мне только одна функция - считать совместимость в мини приложении\n"
                         "Так что жми на кнопку Совместимость и укажи телеграмм id своей половинки "
                         "чтобы узнать насколько вы подходите друг другу")


# Хэндлер на остальной текст
@dp.message(F.text)
async def echo_with_time(message: types.Message):
    await message.answer("Не понял тебя... \nНапиши /help чтобы узнать мои возможности")


async def main():
    await dp.start_polling(bot)


if __name__ == "__main__":
    asyncio.run(main())
