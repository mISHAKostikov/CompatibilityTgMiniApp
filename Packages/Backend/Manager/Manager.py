import asyncio
import json
import socket


class Manager(socket.socket):
    def __init__(self):
        super().__init__(socket.AF_INET, socket.SOCK_STREAM)
        self.bind(('127.0.0.1', 2000))
        self.listen(4)

    def compatibility__calc(self, name_1, name_2):
        bin_name_1 = ''.join(format(i, '08b') for i in bytearray(name_1, encoding='utf-8'))
        bin_name_2 = ''.join(format(i, '08b') for i in bytearray(name_2, encoding='utf-8'))

        num_1 = bin_name_1 + bin_name_2
        num_2 = bin_name_2 + bin_name_1

        res_1 = 0
        res_2 = 0
        res_3 = 0

        for sym_1, sym_2 in zip(num_1, num_2):
            sym_1, sym_2 = int(sym_1), int(sym_2)
            if not (sym_1 ^ sym_2):
                res_1 += 1
            if sym_1 or sym_2:
                res_2 += 1
            if not sym_1 or not sym_2:
                res_3 += 1

        percent_1 = round(res_1 / len(num_1), 2)
        percent_2 = round(res_2 / len(num_1), 2)
        percent_3 = round(res_3 / len(num_1), 2)

        return percent_1, percent_2, percent_3

    async def data_reception_send(self):
        global n
        # Приём данных
        client_socket, addr = self.accept()
        data = client_socket.recv(1024).decode('utf-8')

        # Обработка принятых данных
        json_data = json.loads(data.split('\n')[-1])
        method = json_data['method']
        method_args = json_data['method_args']

        json_end_data = 'zero_data'

        if method == 'compatibility__calc':
            name_1, name_2 = method_args
            compatibility, friendship, love = self.compatibility__calc(name_1, name_2)
            print(compatibility, friendship, love)

            end_data = [
                {"name": "Совместимость", "progress": compatibility},
                {"name": "Дружба", "progress": friendship},
                {"name": "Любовь", "progress": love}
            ]

            json_end_data = json.dumps(end_data, indent=4)
            print(json_end_data)

        # Отправка обработанных данных
        # Сейчас не работает...
        client_socket.send(json_end_data.encode())


manager = Manager()


async def main():
    await manager.data_reception_send()


if __name__ == "__main__":
    while True:
        asyncio.run(main())
