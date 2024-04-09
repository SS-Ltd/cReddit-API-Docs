pipeline {
    agent any
    stages {
        stage('Build & test') {
            steps {
                 sh 'docker build . -t husseinelhawary/creddit_api'
            }
        }

        stage('push to registery') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'creddit-dockerhub-hussein', passwordVariable: 'dockerHubPassword', usernameVariable: 'dockerHubUser')]) {
                    sh "docker login -u ${env.dockerHubUser} -p ${env.dockerHubPassword}"
                    sh "docker push ${env.dockerHubUser}/creddit_api"
                }
            }
        }

        stage('rebuild docker compose'){
            steps {
                sh '/home/jenkins/rebuild_backend.sh'
            }
        }
    }
}
