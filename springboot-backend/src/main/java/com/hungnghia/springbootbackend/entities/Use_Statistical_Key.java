package com.hungnghia.springbootbackend.entities;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import java.io.Serializable;
import java.util.Date;

@Data
@Embeddable
public class Use_Statistical_Key implements Serializable {

    @Column(name = "userId")
    private long userId;

    @Column(name = "dateCreateId")
    private Date dateCreateId;

    public Use_Statistical_Key(long userId, Date dateCreateId) {
        this.userId = userId;
        this.dateCreateId = dateCreateId;
    }

    public Use_Statistical_Key() {

    }
}
