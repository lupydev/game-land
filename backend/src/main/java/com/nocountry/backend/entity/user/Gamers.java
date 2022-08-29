package com.nocountry.backend.entity.user;



import com.nocountry.backend.entity.GamesList;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;


import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.Size;


import java.util.Collection;
import java.util.List;



@Entity
@Setter
@Getter
@Table(name = "gamers")
public class Gamers implements UserDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @Email
    private String username;
    @Size(min =8)
    private String password;
    private String name;

    private boolean accountNonExpired;
    private boolean accountNonLocked;
    private boolean credentialNonExpired;
    private boolean enabled;

    @ElementCollection(targetClass=Long.class)
    private List<Long> recordSudoku;

    @ElementCollection(targetClass=Long.class)
    private List<Long>  recordWordle;

    @ElementCollection(targetClass=Long.class)
    private List<Long>  recordMemories;

    @ElementCollection(targetClass=Long.class)
    private List<Long>  recordBuscaMinas;

    private Long averageSudoku;

    private Long averageWordle;

    private Long averageMemories;

    private Long averageGlobal;

    private Long averageBuscaMinas;


    @OneToOne
    private GamesList gamesList;

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return null;
    }


    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }




}
