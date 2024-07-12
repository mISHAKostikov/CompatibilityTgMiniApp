from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
import json

app = Flask(__name__)
CORS(app, support_credentials=True)

def compatibility__calc(name_1, name_2):
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

        percent_1 = round(res_1 / len(num_1), 2) * 100
        percent_2 = round(res_2 / len(num_1), 2) * 100
        percent_3 = round(res_3 / len(num_1), 2) * 100

        return percent_1, percent_2, percent_3

@app.route('/', methods=['POST'])
@cross_origin(supports_credentials=True)
def data_reception_send():
        data = request.data.decode('utf-8')
        json_data = json.loads(data.split('\n')[-1])
        method = json_data['method']
        method_args = json_data['method_args']
        name_1, name_2 = method_args
        compatibility, friendship, love = compatibility__calc(name_1, name_2)
        print(compatibility, friendship, love)

        end_data = [
            {"name": "Совместимость", "progress": compatibility},
            {"name": "Дружба", "progress": friendship},
            {"name": "Любовь", "progress": love}
        ]

        return json.dumps(end_data, indent=4)

if __name__ == '__main__':
        app.run(port=2000)
