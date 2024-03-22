from flask import Flask, render_template, request, jsonify,redirect,url_for
import mysql.connector
from db_config import configRemote, config

cnx = mysql.connector.connect(**config)
cursor = cnx.cursor(dictionary=True)
app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')


@app.route('/iniciar', methods=['POST'])
def iniciar():
    correo = request.form['correo-ingresar']
    contraseña = request.form['contraseña-ingresar']
    cursor.callproc('sp_Usuario_Login', (correo, contraseña))
    for data in cursor.stored_results():
        cuenta = data.fetchall()
    if cuenta:
        return cuenta
    else:
        return jsonify({'error': 'Credenciales inválidas'}), 401


@app.route('/mostrar_cuenta')
def mostrar_cuenta():
    return render_template('cuenta.html')


@app.route('/recuperar')
def recuperar():
    return render_template('')


@app.route('/registrar')
def registrar():
    return render_template('')


if __name__== '__main__':
    app.run(debug=True)