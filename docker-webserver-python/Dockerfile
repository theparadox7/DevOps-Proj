from python:3.9-slim
WORKDIR /app
COPY . /app
RUN pip install --no-cache-dir -r requirements.txt
EXPOSE 5000
CMD ["python", "app.py"]
# This Dockerfile sets up a Python web server using Flask.
# It uses a slim version of Python 3.9, copies the application code into the
# container, installs the required packages from requirements.txt, exposes port 5000,
# and runs the application using the command `python app.py`.
# Make sure to have an app.py file in the same directory as this Dockerfile.
# The app.py file should contain the Flask application code.
