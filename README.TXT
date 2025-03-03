Test

sudo yum update -y
sudo yum install git -y

1. frst setup AWSCli 
2. config it using aws configure cmd
3. map AWS Access Key ID and AWS Secret Acess Key
Default region
Defult output format 
4. verify usinf 
aws sts get-caller-identity
5. install Pulumi
curl -fsSL https://get.pulumi.com | sh
echo 'export PATH=$PATH:$HOME/.pulumi/bin' >> ~/.bashrc
source ~/.bashrc
pulumi version
pulumi login
sudo amazon-linux-extras enable nodejs20
sudo yum install -y nodejs
node -v
npm -v
sudo yum update -y
pulumi config set test:domainName testcase.com
pulumi config set test:certificateArn arn:aws:acm:us-east-1:528757806896:certificate/f5eeb3c5-2414-40f4-a725-1c92ed09803d
pulumi config


aws acm describe-certificate --certificate-arn arn:aws:acm:us-east-1:528757806896:certificate/f5eeb3c5-2414-40f4-a725-1c92ed09803d --region us-east-1

