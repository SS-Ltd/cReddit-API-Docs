pipeline {
    agent any
    environment {
        dockerHub = credentials('creddit-dockerhub-hussein')
    }
    stages {
        stage('Build & test') {
            steps {
                 sh "docker build . -t ${env.dockerHub_USR}/creddit_api"
            }
        }

        stage('push to registery') {
            steps {
                sh "docker login -u ${env.dockerHub_USR} -p ${env.dockerHub_PSW}"
                sh "docker push ${env.dockerHub_USR}/creddit_api"
            }
        }

        stage('rebuild docker compose'){
            steps {
                sh "/home/jenkins/pull_image.sh ${env.dockerHub_USR}  ${env.dockerHub_PSW} APIDocs"
            }
        }
    }
}
