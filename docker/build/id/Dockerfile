# escape=`

ARG PARENT_IMAGE

FROM ${PARENT_IMAGE}

WORKDIR C:\Identity

# Copy identity artifacts
COPY wdp/ .

ENTRYPOINT ["dotnet", "Sitecore.IdentityServer.Host.dll"]