from flask import Flask,render_template,request 

app = Flask(__name__)

@app.route('/')
def home() -> str:
    return "hello this is index page"

@app.route('/admin', methods=['GET','POST'])
def admin() -> str:
    if request.method == 'POST':
        username:str = request.form.get('username')
        password:str = request.form.get('password')
        if username == 'admin' and password == 'admin123':
            return "Welcome to the admin page!"
        else:
            return "Invalid credentials", 401
    return render_template('admin.html')
    
app.run(debug=True)