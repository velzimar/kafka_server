docker exec -it kafka  /opt/bitnami/kafka/bin/kafka-topics.sh --create --partitions 1  --replication-factor 1  --topic Approved_Deals_test  --bootstrap-server localhost:9092