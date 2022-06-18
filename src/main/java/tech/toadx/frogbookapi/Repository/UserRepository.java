package tech.toadx.frogbookapi.Repository;

import java.util.ArrayList;
import java.util.UUID;

import org.springframework.data.cassandra.repository.CassandraRepository;
import org.springframework.stereotype.Repository;
import tech.toadx.frogbookapi.Entity.User;

@Repository
public interface UserRepository extends CassandraRepository<User, UUID> {

    User save(User user);
    ArrayList<User> findAll();User findAllByUserID(UUID userID);
}