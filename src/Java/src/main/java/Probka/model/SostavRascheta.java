package Probka.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Probka.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: СоставРасчета
 */
@Entity(name = "IISProbkaСоставРасчета")
@Table(schema = "public", name = "СоставРасчета")
public class SostavRascheta {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Тип")
    private String тип;

    @Column(name = "Наименование")
    private Double наименование;

    @Column(name = "Сумма")
    private Double сумма;

    @Column(name = "Ндфл")
    private Double ндфл;

    @Column(name = "Взносы")
    private Double взносы;

    @Column(name = "Всего")
    private Double всего;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "RaschetnyjList")
    @Convert("RaschetnyjList")
    @Column(name = "РасчетныйЛист", length = 16, unique = true, nullable = false)
    private UUID _raschetnyjlistid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "RaschetnyjList", insertable = false, updatable = false)
    private RaschetnyjList raschetnyjlist;


    public SostavRascheta() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getТип() {
      return тип;
    }

    public void setТип(String тип) {
      this.тип = тип;
    }

    public Double getНаименование() {
      return наименование;
    }

    public void setНаименование(Double наименование) {
      this.наименование = наименование;
    }

    public Double getСумма() {
      return сумма;
    }

    public void setСумма(Double сумма) {
      this.сумма = сумма;
    }

    public Double getНдфл() {
      return ндфл;
    }

    public void setНдфл(Double ндфл) {
      this.ндфл = ндфл;
    }

    public Double getВзносы() {
      return взносы;
    }

    public void setВзносы(Double взносы) {
      this.взносы = взносы;
    }

    public Double getВсего() {
      return всего;
    }

    public void setВсего(Double всего) {
      this.всего = всего;
    }


}