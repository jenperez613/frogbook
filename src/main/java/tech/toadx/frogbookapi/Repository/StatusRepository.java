package tech.toadx.frogbookapi.Repository;

import java.util.ArrayList;
import java.util.UUID;

import org.springframework.data.cassandra.repository.CassandraRepository;
import tech.toadx.frogbookapi.Entity.Status;


public interface StatusRepository extends CassandraRepository<Status, UUID> {
    Status save(Status status);
    ArrayList<Status> findAll();
}