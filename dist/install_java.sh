# Check argument value
if [[ $1 == 8 || $1 == 11 ]]; then
    # Installation
    sudo apt update
    sudo apt install openjdk-$1-jdk

    # Export the var and update the path for the steps after this action
    export JAVA_HOME=/usr/lib/jvm/java-$1-openjdk-amd64
    echo "::set-env name=JAVA_HOME::"$JAVA_HOME
    echo "::add-path::"$JAVA_HOME"/bin"
    exit 0
else
    echo "Bad argument. Expected 8 or 11"
    exit 1
fi