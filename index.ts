import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";

// Configuration
const domainName = "websitedns.com";

// Create a Route 53 Hosted Zone
const hostedZone = new aws.route53.Zone("hostedZone", {
    name: domainName,
});

// Create an ACM Certificate
const certificate = new aws.acm.Certificate("sslCertificate", {
    domainName: domainName,
    validationMethod: "DNS",
}, { provider: new aws.Provider("useast1", { region: "us-east-1" }) });

// Export values to be used by app-infra
export const hostedZoneId = hostedZone.id;
export const certificateArn = certificate.arn;
export const domain = domainName;
